
import Modal from './Modal';
import React, { useState } from 'react'



//validaing inputs logic
// 1 validate User Name
function validateName(name) {
    const rgx = /^[A-Za-z]{4,}$/;
    return rgx.test(name);
};
//validate Email
function validateEmail(email) {
    return email.includes("@") && email.includes('.');
}
// validating user Password
function validatePassword(pass) {
    const rgx = /^.{6,}$/;
    return rgx.test(pass);
};

//modal sate management
function UserForm() {
    const [showModal, setShowModal] = useState(false);

    //form data state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    //error object
    const [errors, setErros] = useState({});

    //hundle Change function
    function hundleOnchage(e) {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        });
        //errors
        let newError = "";
        //validate name
        if (name === "name") {
            if (!validateName(value.trim())) {
                newError = "invalid name"
            };
        };
        //validate password
        if (name === "email") {
            if (!validateEmail(value.trim())) {
                newError = "invalid email"
            }
        };

        //va;idate password
        if (name === "password") {
            if (!validatePassword(value.trim())) {
                newError = "invalid password"
            }
        };
        setErros({ ...errors, [name]: newError });
    };


    const [loading, setLoading] = useState(false);
    //   const [showModal, setShowModal] = useState(false)
    const [sucsess, setSuccsess] = useState(false);
    //hundle submit
    function hundleSubmit(e) {
        e.preventDefault();
        // setLoading(true);



        let newError = {}

        if (!validateName(formData.name)) {
            newError.name = 'invalid name'
            //  setShowModal(false);
        }
        if (!validateEmail(formData.email)) {
            newError.email = "invalid email"
            // setShowModal(false);
        }
        if (!validatePassword(formData.password)) {
            newError.password = "invalid password";
            //  setShowModal(false);
        }

        setErros(newError);

        //are all feilds valid
        const isFormValid = validateName(formData.name)
            && validateEmail(formData.email)
            && validatePassword(formData.password);

        if (!isFormValid) {
            console.log(isFormValid);
            console.log('form is not valid');

            return
        };

        console.log(isFormValid);
        console.log("submited sucsessfully");

        setFormData({
            name: "",
            email: "",
            password: ""
        })
        setLoading(true);

        setTimeout(() => {
            setShowModal(true);
            // setSuccsess(true);
            setLoading(false);
        }, 3000);

    };

    function hundleOnClose() {
        setShowModal(false);
    };
    return (
        <div>
            <form action="" onSubmit={hundleSubmit}>
                <h2>sing up</h2>
                {/*     {showModal && <Modal />} */}

                <input type="text"
                    name='name'
                    placeholder='entr your name'
                    value={formData.name}
                    onChange={hundleOnchage}

                />
                <br />
                {errors ? <small style={{ color: "red" }}>{errors.name}</small> : null}
                <br />

                <input type="text"
                    name='email'
                    placeholder='entr your email'
                    value={formData.email}
                    onChange={hundleOnchage}
                />
                <br />
                {errors ? <small style={{ color: "red" }}>{errors.email}</small> : null}
                <br />

                <input type="password"
                    name='password'
                    value={formData.password}
                    onChange={hundleOnchage}
                    placeholder='entr your password'
                />
                <br />
                {errors ? <small style={{ color: "red" }}>{errors.password}</small> : null}
                <br /><br />

                <button type='submit'> {loading ? 'submiting...' : 'Submit'}</button>
                {/* {loading ? null : <Modal />} */}
            </form>
            {/*    {sucsess && <p>form submited✅</p>} */}
            {showModal && <Modal onclose={hundleOnClose} />}

            <br />

        </div>
    )
}

export default UserForm