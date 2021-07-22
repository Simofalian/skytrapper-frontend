import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Radio from "./Radio";
import Select from "./Select";
import Checkbox from "./Checkbox";
import DatePick from "./Date";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePick {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
