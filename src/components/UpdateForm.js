import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material"
import app_config from "../config";
import Swal from "sweetalert2";
const UpdateForm = (props) => {


    const url = app_config.api_url;


    const UpdateSubmit = (formdata) => {
        console.log(formdata);
        // three things are required to request 
        // 1.address
        // 2.http request method
        // 3.data and its format 


        const reqOpt = {
            method: 'PUT',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(url + '/user/update/' + props.updateFormData._id, reqOpt)
            .then((res) => {
                console.log(res.status);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                props.fetchUsersData();

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have Updated successfully!',
                });

            });
    };

    return (
        <div className="update-bg">
            <h1 className="text-center">Signup here </h1>
            <hr />
            <div className="col-md-4 mx-auto">

                <Card>
                    <CardContent>
                        <Formik initialValues={props.updateFormData} onSubmit={UpdateSubmit}>
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit}>
                                    <label className="mt-3">Email</label>
                                    <input
                                        placeholder="email"
                                        className="form-control"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <label className="mt-3">Username</label>
                                    <input placeholder="username" className="form-control" id="username" value={values.username} onChange={handleChange} />

                                    <label className="mt-3">Password</label>
                                    <input type="password"
                                        placeholder="password"
                                        className="form-control"
                                        id="password" value={values.password} onChange={handleChange}
                                    />


                                    <Button type="submit"
                                        className="mt-5 float-end"
                                        color="secondary"
                                        variant="contained">Update to continue</Button>
                                </form>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default UpdateForm;