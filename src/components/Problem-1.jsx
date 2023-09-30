import React, { useState } from 'react';

const Problem1 = () => {

    const [tasks, setTasks] = useState([
        {
            task: 'Task name',
            status: 'active'
        },
        {
            task: 'Task name 2 ',
            status: 'completed'
        },
        {
            task: 'Task name 3',
            status: 'active'
        }
    ])

    const [show, setShow] = useState('all');

    const handleClick = (val) => {
        setShow(val);

        if (val === 'active') {
            setShow('active')
        } else if (val === 'completed') {
            setShow('completed')
        } else {
            setShow('all')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let taskName = event.target.name.value
        let taskStatus = event.target.status.value

        setTasks([...tasks, { task: taskName, status: taskStatus }])

        event.target.name.value = '';
        event.target.status.value = '';
    }

    const filteredTasks = show === 'all' ? tasks : tasks.filter((task) => task.status === show);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredTasks?.map((task, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{task?.task}</td>
                                            <td>{task?.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;