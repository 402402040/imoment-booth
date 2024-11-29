import React from "react";

export interface FormTextProps {
    formatFunction?: (value: any) => JSX.Element | string;
    value?: any;
}
export const FormText = ({ value, formatFunction }: FormTextProps) => {
    if (formatFunction) {
        return <div>{formatFunction(value)}</div>;
    }
    return <div>{value}</div>;
};
