import React from "react";

export default function Rinput({ text, placeholdertext, value, onChange }) {
  return (
    <div style={{ position: "relative" }}>
      <style>
        {`
        .importantStyle::placeholder{
            font-size:12px !important;
            color: #013C5E;
            font-weight:bolder
        }
                    .importantStyle {
                        padding: 1rem !important;
                        border-radius: 5px !important;
                        padding-left: 3rem; /* Adjust based on your placeholder's length */
                        position:relative !important;
                        font-size:15px;
                        color: #013C5E;
                        font-weight:bolder
                    }
                    .labelinput{
                        position: absolute;
                        top: 0px;
                        z-index: 1;
                        font-size: 11px;
                        padding-left: 1rem;
                        color: grey;

                    }
                    
                `}
      </style>

      <label for="hires" className="labelinput">
        {text}
      </label>
      <input
        type="text"
        class="form-control importantStyle"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder={placeholdertext}
        style={{ padding: "1rem", borderRadius: "5px " }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
