import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class SciPlans extends React.Component {

    // ---------------------------------------------- CONSTRUCTOR----------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
            planNo:"",
            startDate: "",
            creator: "",
            starSystem: "",
            telescopeLocation: "",
            status: "",
        };
        this.delete = this.test.bind(this);
        this.delete = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    // --------------------------------------------------------------------------------------------------
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }
    componentDidMount() {
        this.show()
    }
    
    // ---------------------------------------------- Authorization----------------------------------------------------
    // auth() {
    //     const token = localStorage.getItem('token')
    //     console.log(token)
    //     fetch("http://localhost:3001/authA", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "Authorization": 'Bearer ' + token
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data.admin[0].l_role);
    //             if (data.status !== 'ok') {
    //                 alert('Please login');
    //                 localStorage.removeItem('token');
    //                 window.location = '/login';
    //             }
    //             if (data.admin[0].l_role !== 'A') {
    //                 alert('You cannot enter here!');
    //                 localStorage.removeItem('token');
    //                 window.location = '/login';
    //             }
    //             else {
    //                 this.showAll();
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    // }
    show(){
        this.showAll();
    }

    test(e, d) {
        e.preventDefault();
        const link = "http://localhost:8080/test-sciencePlan/"+d;
        console.log(link);
        fetch(link, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            timeout: 30000 // 30 seconds
        })
         
            .then((response) => response.text())
            .then((response) => {
                console.log(response);
                alert(response);
            })

            .catch((err) => {
                console.log(err);
                alert("error");
            });
    }

    submit(e, d) {
        e.preventDefault();
        const link = "http://localhost:8080/submit-sciencePlan/"+d;
        console.log(link);
        fetch(link, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(response);
                alert(response);
            })

            .catch((err) => {
                console.log(err);
                alert("error");
            });
    }

    validate(e, d) {
        e.preventDefault();
        const link = "http://localhost:8080/validate-sciencePlan/"+d;
        console.log(link);
        fetch(link, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(response);
                alert(response);
            })

            .catch((err) => {
                console.log(err);
                alert("error");
            });
    }
    // ---------------------------------------------- VIEW ALL PRODUCTS----------------------------------------------------
    showAll(e) {
        fetch("http://localhost:8080/sciencePlans", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.setState({ result: response});
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
                <div className="upper">
                <h1>Science Plans</h1>
                <a href='/createSciPlan'>
                    <div className="d-grid gap-2">
                    <Button variant="dark" size="lg" value="add">Add</Button>
                    </div>
                </a>
                {/* TABLE THAT SHOW PRODUCTS*/}
                <Table striped bordered>
                    <thead>
                    <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Creator</th>
                    <th>Star System</th>
                    <th>Telescope</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    {this.state.result && this.state.result.map((result, key) => {
                        // var link3 = "/test/" + result.planNo;
                        // var link4 = "/sciPlans/" + result.planNo;
                        // var link5 = "/submit/" + result.planNo;
                        var d = result.planNo;
                        console.log(d);
                        return (
                            <tbody>
                            <tr> {" "}
                                <td>{result.planNo}</td>
                                <td>{result.startDate}</td>
                                <td>{result.creator}</td>
                                <td>{result.starSystem}</td>
                                <td>{result.telescopeLocation}</td>
                                <td>{result.status}</td>
                                {/* CLICK TO GO TO EDIT THAT PRODUCT*/}
                                <td>
                                    <Button variant="primary" value="test" onClick={(e) => this.test(e, d)}>Test</Button>
                            
                                    <Button variant='info' value="submit" onClick={(e) => this.submit(e, d)}>Submit</Button>
                            
                                </td>
                                <td>
                            
                                    <Button variant='info' value="view" onClick={(e) => this.validate(e, d)}>Validate</Button>
                      
                                </td>
                            </tr>
                            </tbody>
                        );
                    })}
                </Table>
            </div>
        );
    }
}
export default SciPlans;