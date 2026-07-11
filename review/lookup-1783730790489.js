(function(window, undefined) {
  var dictionary = {
    "eb4b1cc9-bca8-428c-83e4-8f0091894ebc": "LODGING",
    "330f6462-d24f-4519-a6f4-9d9cc5e1186b": "CONTACT US",
    "2a15c7ed-0a3e-473f-b98f-3ab77b47f41c": "FAQ",
    "43498e6f-695d-436f-927e-7cecf3a27640": "TRANSPORTATION",
    "66064276-c1b7-435d-8996-6c96c868975c": "HOME PAGE",
    "8f747ae6-fc87-4713-9472-8ace42e51f5b": "ACTIVITIES",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);