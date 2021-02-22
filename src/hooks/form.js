import { useState } from "react";

function useFormModel(initialValue) {
  let [model, set] = useState(initialValue);

  let result = {};

  for (let field in model) {
    result[field] = fieldModel(model[field]);
    result[field]["name"] = field;
    result[field]["onChange"] = function (e) {
      //set the state value
      model[field] = e.target.value;
      set({ ...model });
    };
  }
  return [result, set];
}

function fieldModel(model, set = null) {
  let attrs = { value: model };
  if (set !== null) {
    attrs["onChange"] = function (e) {
      set(e.target.value);
    };
  }
  return attrs;
}

function useFieldModel(model, set) {
  return fieldModel(model, set);
}

export { useFormModel, useFieldModel };
