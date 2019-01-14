import React, { Component } from "react";

// import Form from "react-jsonschema-form"
import Form from "../../jsf";
import { samples } from "../../schemas";

// let schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: { type: "string", title: "Title", default: "A new task" },
//     done: { type: "boolean", title: "Done?", default: false }
//   }
// };
let schema = {
  "title": "Party. Mark Care_ Indicator. Indicator",
  "description": "An indicator that this party is \"care of\" (c/o) (true) or not (false).",
  "items": {
    "properties": {"IndicatorContent": { "type": "boolean" }},
    "additionalProperties": false, 
    "type": "object"
  },
  "maxItems": 1, "minItems": 1,
  "additionalProperties": false,
  "type": "array"

};
const log = (type) => console.log.bind(console, type);
class App extends Component {
  render() {
    //  const {schema, uiSchema, formData} = samples.Simple
    //  uiSchema={uiSchema}
    //   formData={formData} 
     const { schema } = samples.Simple
    return (
      <Form
        schema={schema}

        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    )
  }
}

export default App;

