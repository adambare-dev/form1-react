import React, { useState } from 'react'

import './form.css';
//validation helpers
function validateName(name) {
    const rgx = /^[A-Za-z]{4,}$/;
    return rgx.test(name);
};
//validate Email
function validateEmail(email) {
    return email.includes("@") && email.includes('.');
}
function SingUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        isChecked: false
    });

    //  const [isChecked, setIscheckd] = useState(false);
    const [errors, setErros] = useState({});
    const [isSubmotting, setIsSubmotting] = useState(false);

    const [succsess, setSucssess] = useState(false);

    //hundle chaneg
    function hundleChange(e) {
        // const { name, type, checked, value, } = e.target;
        /* setForm((prev) => {
            return { ...prev, [name]: type === "checkbox" ? checked : value };
        }); */
        const { name, value, type, checked } = e.target;
        setForm((prev) => (
            { ...prev, [name]: type === "checkbox" ? checked : value }
        ));
        // console.log(e.target.checked);


        let err = "";
        if (name === "name" && !validateName(value.trim())) {
            err = "invlid name"
        };

        if (name === "email" && !validateEmail(value.trim())) {
            err = "invlid email";
        };
        //&& !form.ischecked or &&form.ischecked === true
        if (name === "isChecked" && form.isChecked) {
            err = "agree terms";
        };

        setErros(prev => {
            return { ...prev, [name]: err }
        });



    };
    function hundleSubmit(e) {
        e.preventDefault();

        let newErrors = {
            name: !validateName(form.name.trim()) ?
                "name must contain at least 4 degits" : "",
            email: !validateEmail(form.email.trim()) ? "invalid email!" : null,
            // isChecked: form.isChecked ? "" : "agree terms",
            isChecked: !form.isChecked ? "you must agree our terms" : null
        };
        //validating the check box input only
        /*  if (!form.isChecked) {
             newErrors.isChecked = "you must agree our policy"
         }; */

        // const isValid = !validateName(form.name.trim()) &&
        //     !validateEmail(form.email.trim());

        //1->isformValid 2-> if(condition)
        //boolean context
        /*  if (!validateName(form.name) || !validateEmail(form.email) || !form.isChecked) {
             setErros(newErrors);
             console.log("something went wrong!");
             return
         }; */

        //using non booelan context
        if (validateEmail(form.email) && validateName(form.name)
            && form.isChecked) {
            setIsSubmotting(true);
            setSucssess(true);
            console.log(form);
            setTimeout(() => {
                setIsSubmotting(false);


            }, 2000)
            setForm({ name: "", email: "", isChecked: "" });

        } else {
            setErros(newErrors);
        };


        /*  setIsSubmotting(true);
         setSucssess(true);
         console.log(form);
         setTimeout(() => {
             setIsSubmotting(false);
 
         }, 2000)
         setForm({ name: "", email: "" })
  */
        // setErros(newErrors);
        /*   if (!isValid) {
              return
          } */
        // console.log(isValid);
        // console.log(form);
        /*  if (!isValid) {
             setErros(newErrors);
             console.log("something went wrong");
             return
         };
         console.log(form);
 
         setForm({ name: "", email: "" }) */
    }
    function hundleCheck(e) {
        console.log(e);
        setIscheckd(e.target.checked);
        console.log(e.target.checked);
        console.log(isChecked);

    };

    return (
        <div>
            <form action="" onSubmit={hundleSubmit}>
                <h2>sing Up</h2>
                <input type="text"
                    name='name'
                    placeholder='enter your name'
                    value={form.name}
                    onChange={hundleChange} />
                <br />
                {errors.name && <small>{errors.name}</small>}
                <br /><br />

                <input type="text"
                    name='email'
                    placeholder='enter your email'
                    value={form.email}
                    onChange={hundleChange}
                />
                <br />
                {errors.email && <small>{errors.email}</small>}
                <br /> <br />
                <input type='checkbox'
                    name='isChecked'
                    checked={form.isChecked}
                    /*  checked={form.isChecked} */
                    onChange={hundleChange} />
                <br />

                {errors.isChecked && <small style={{ color: '#0077cc' }}>{errors.isChecked}</small>}
                {/* {form.isChecked ? "" : "agree terms"} */}
                <br /><br />
                <button type='submit' disabled={isSubmotting}>{isSubmotting ? "submitting..." : "submit"}</button>
            </form>
            <p>{succsess && "submitedd succsessfully✅"}</p>
        </div>
    );
};

export default SingUp;

