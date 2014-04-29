var modelid = "{{ modelid }}";
var modeltype = "{{ modeltype }}";
var elementid = "{{ elementid }}";
console.log("Rendering in notebook");
console.log("  modeltype:", modeltype);
console.log("  modelid:", modelid);
console.log("  elementid:", elementid);
var all_models = {{ all_models }};
Bokeh.load_models(all_models);
var model = Bokeh.Collections(modeltype).get(modelid);
var view = new model.default_view({model: model, el: '#{{ elementid }}'});