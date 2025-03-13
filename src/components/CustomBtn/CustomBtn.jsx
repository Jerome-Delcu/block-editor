import React from "react";
import { Button } from "antd";

export const CustomBtn = () => {
    return (
        <Button type="primary" onClick={() => alert("Working!")}>
            Custom boton
        </Button>
    )
}