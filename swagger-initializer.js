window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: "./swagger.json",  // Buraya swagger.json-un yolunu yaz
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });
};