const axios = require("axios");

exports.handler = async (event) => {
  try {
    const result = await axios.get(
      "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
    );

    const data = await formatData(result.data);
    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    };
    return response;
  } catch (error) {
    const response = {
      statusCode: 500,
      body: JSON.stringify(error),
    };
    return response;
  }
};

const formatData = (response) => {
  const sols = [];

  for (let [key, value] of Object.entries(response)) {
    if (key !== "sol_keys" && key !== "validity_checks") {
      let sol = {
        sol: parseInt(key),
        earthDate: value.First_UTC,
        temperature: {
          min: value.AT.mn,
          max: value.AT.mx,
          average: value.AT.av,
        },
        windSpeed: {
          min: value.HWS.mn,
          max: value.HWS.mx,
          average: value.HWS.av,
          commonDirection: value.WD.most_common.compass_degrees,
        },
      };

      sols.push(sol);
    }
  }

  return sols;
};
