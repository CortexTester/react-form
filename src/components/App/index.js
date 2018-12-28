import React, { Component } from "react";

// import Form from "react-jsonschema-form"
import Form from "../../jsf";
import { samples } from "../../schemas";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false }
  }
};
const log = (type) => console.log.bind(console, type);
class App extends Component {
  render() {
    // const {schema, uiSchema, formData} = samples.Simple
    //  uiSchema={uiSchema}
    //   formData={formData} 
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

// import React, { Component } from 'react';
// import { render } from "react-dom";
// import { shouldRender } from "../../jsf/utils";
// import Form from ".../../jsf";
// import { samples } from "../../schemas";
// import './App.css';

// const log = type => console.log.bind(console, type);
// const fromJson = json => JSON.parse(json);
// const toJson = val => JSON.stringify(val, null, 2);
// const cmOptions = {
//   theme: "default",
//   height: "auto",
//   viewportMargin: Infinity,
//   mode: {
//     name: "javascript",
//     json: true,
//     statementIndent: 2,
//   },
//   lineNumbers: true,
//   lineWrapping: true,
//   indentWithTabs: false,
//   tabSize: 2,
// };
// const themes = {
//   default: {
//     stylesheet:
//       "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
//   }
// }
// class GeoPosition extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { ...props.formData };
//   }

//   onChange(name) {
//     return event => {
//       this.setState({ [name]: parseFloat(event.target.value) });
//       setImmediate(() => this.props.onChange(this.state));
//     };
//   }

//   render() {
//     const { lat, lon } = this.state;
//     return (
//       <div className="geo">
//         <h3>Hey, I'm a custom component</h3>
//         <p>
//           I'm registered as <code>geo</code> and referenced in
//           <code>uiSchema</code> as the <code>ui:field</code> to use for this
//           schema.
//         </p>
//         <div className="row">
//           <div className="col-sm-6">
//             <label>Latitude</label>
//             <input
//               className="form-control"
//               type="number"
//               value={lat}
//               step="0.00001"
//               onChange={this.onChange("lat")}
//             />
//           </div>
//           <div className="col-sm-6">
//             <label>Longitude</label>
//             <input
//               className="form-control"
//               type="number"
//               value={lon}
//               step="0.00001"
//               onChange={this.onChange("lon")}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // initialize state with Simple data sample
//     const { schema, uiSchema, formData, validate } = samples.Simple;
//     this.state = {
//       form: false,
//       schema,
//       uiSchema,
//       formData,
//       validate,
//       editor: "default",
//       theme: "default",
//       liveSettings: {
//         validate: true,
//         disable: false,
//       },
//       shareURL: null,
//     };
//   }
//   componentDidMount() {
//     const hash = document.location.hash.match(/#(.*)/);
//     // if (hash && typeof hash[1] === "string" && hash[1].length > 0) {
//     //   try {
//     //     this.load(JSON.parse(atob(hash[1])));
//     //   } catch (err) {
//     //     alert("Unable to load form setup data.");
//     //   }
//     // } else {
//       this.load(samples.Simple);
//     // }
//   }
//   load = data => {
//     // Reset the ArrayFieldTemplate whenever you load new data
//     const { ArrayFieldTemplate, ObjectFieldTemplate } = data;
//     // force resetting form component instance
//     this.setState({ form: false }, _ =>
//       this.setState({
//         ...data,
//         form: true,
//         ArrayFieldTemplate,
//         ObjectFieldTemplate,
//       })
//     );
//   };
//   render() {
//     const {
//       schema,
//       uiSchema,
//       formData,
//       liveSettings,
//       validate,
//       theme,
//       ArrayFieldTemplate,
//       ObjectFieldTemplate,
//       transformErrors,
//     } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>

//         </header>
//         <div className="col-sm-5">
//           {this.state.form && (
//             <Form
//               ArrayFieldTemplate={ArrayFieldTemplate}
//               ObjectFieldTemplate={ObjectFieldTemplate}
//               liveValidate={liveSettings.validate}
//               disabled={liveSettings.disable}
//               schema={schema}
//               uiSchema={uiSchema}
//               formData={formData}
//               onChange={this.onFormDataChange}
//               onSubmit={({ formData }) =>
//                 console.log("submitted formData", formData)
//               }
//               fields={{ geo: GeoPosition }}
//               validate={validate}
//               onBlur={(id, value) =>
//                 console.log(`Touched ${id} with value ${value}`)
//               }
//               onFocus={(id, value) =>
//                 console.log(`Focused ${id} with value ${value}`)
//               }
//               transformErrors={transformErrors}
//               onError={log("errors")}>
//               <div className="row">
//                 <div className="col-sm-3">
//                   <button className="btn btn-primary" type="submit">
//                     Submit
//                   </button>
//                 </div>
//                 {/* <div className="col-sm-9 text-right">
//                   <CopyLink
//                     shareURL={this.state.shareURL}
//                     onShare={this.onShare}
//                   />
//                 </div> */}
//               </div>
//             </Form>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
