import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [bootcamps, setBootcamps] = useState([]);

    // UseEffect Hook
    useEffect(() => {
        axios.get('https://moringa-bootcamp-api.herokuapp.com/api/v1/bootcamps')
            .then(res => {
                setBootcamps(res.data.data);
                console.log(bootcamps)
            }).catch((error => {
             console.log(error)
        }))
    },[]);

    return (
        <div>
            <section className="browse my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                bootcamps.map((bootcamp => {
                                    return (
                                        <div key={bootcamp?.id} className="card mb-3">
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" src='https://media.glassdoor.com/l/1110377/moringa-school-office.jpg'  alt=''/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            <a href="/">{bootcamp?.name}
                                                                <span className="badge rounded-pill text-bg-success" style={{float: 'right'}}>8.8</span>
                                                            </a>

                                                        </h5>
                                                        <span className="badge text-bg-secondary">Address: Moringa School</span>
                                                        <span className="badge text-bg-secondary cost">Cost: Ksh {bootcamp?.averageCost}</span>
                                                        <p className="card-text">
                                                            Frontend Developer
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }))
                            }

                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="/">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="/">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-md-4">
                            <h4>Filter</h4>
                            <form>
                                <div className="form-group">
                                    <label> Career</label><br />
                                    <select className="custom-select mb-2 form-control">
                                        <option value="any">Any</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                        <option value="UI/UX">UI/UX</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Business">Business</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label> Rating</label><br />
                                    <select className="custom-select mb-2 form-control">
                                        <option value="any">Any</option>
                                        <option value="9">9+</option>
                                        <option value="8">8+</option>
                                        <option value="7">7+</option>
                                        <option value="6">6+</option>
                                        <option value="5">5+</option>
                                        <option value="4">4+</option>
                                        <option value="3">3+</option>
                                        <option value="2">2+</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label> Budget</label><br />
                                    <select className="custom-select mb-2 form-control">
                                        <option value="any">Any</option>
                                        <option value="20000">Ksh 20,000</option>
                                        <option value="15000">Ksh 15,000</option>
                                        <option value="10000">Ksh 10,000</option>
                                        <option value="8000">Ksh 8,000</option>
                                        <option value="6000">Ksh 6,000</option>
                                        <option value="4000">Ksh 4,000</option>
                                        <option value="2000">Ksh 2,000</option>
                                    </select>
                                </div>
                                <input
                                    type="submit"
                                    value="Find Bootcamps"
                                    className="btn btn-primary btn-block"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home
