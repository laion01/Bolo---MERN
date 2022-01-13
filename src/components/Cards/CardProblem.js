import React from "react";
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';
// components
const Checkbox = props => (
    <input type="radio" name="problem" />
)

export default function CardProblem({q, c, w, checks, v}) {
  return (
    <>
    <div className="lg:w-9/12">
        <div className="py-5 border-t">
            <div className="flex flex-wrap">
                {c.length > 0 &&
                   <div className="w-full bg-blueGray-100">
                        <p className="m-4 text-lg leading-relaxed text-blueGray-700">{c}</p>
                    </div>
                }
                <div className="w-full px-4">
                    {c.length > 0
                        ? <p className="mb-4 mt-4 text-lg leading-relaxed text-blueGray-700">{q}</p>
                        : <p className="mb-4 text-lg leading-relaxed text-blueGray-700">{q}</p>
                    }
                </div>
                {w.length > 0 &&
                    <div className="w-full px-4 border-2">
                        <i className="fab fa-info-circle"></i>
                        <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-700">{w}</p>
                    </div>
                }
            </div>
        </div>
        <div className="mb-12 px-12">
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="question"
                    name="controlled-radio-buttons-group"
                    value={v}
                    >
                    { 
                        checks.map(each => (
                            <FormControlLabel value={each.text} control={<Radio/>} label={each.text} />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </div>
    </div>
    </>
  );
}
