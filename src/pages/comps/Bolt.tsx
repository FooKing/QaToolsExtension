import React, {useState} from 'react';
import './Comps.css';
import 'tw-elements';
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
export default function Bolt(): JSX.Element {

    //Setup arrays so they can be used as default values
    const environmentArray = Array(9).fill( 9).map((_, i) => {
        return {Frontend: `project${i}.`, Name: `Project ${i}`, Jenkins: `project${i}`}
    })


    const [selectedValue, setSelectedValue] = useState(environmentArray[0].Frontend);
    function handleFrontendRegionChange(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value)
    }

    return (
        <div className="flex items-start">
            <ul className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4" id="tabs-tabVertical"
                role="tablist">
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-homeVertical" className="
                     nav-link
                     hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                       id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
                       aria-controls="tabs-homeVertical" aria-selected="true">Frontend</a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-jenkinsVertical" className="
                     nav-link
                     hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                       id="tabs-jenkins-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-jenkinsVertical" role="tab"
                       aria-controls="tabs-jenkinsVertical" aria-selected="false">Jenkins</a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-rundeckVertical" className="
                     nav-link
                     hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                       id="tabs-rundeck-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-rundeckVertical" role="tab"
                       aria-controls="tabs-rundeckVertical" aria-selected="false">Rundeck</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContentVertical">
                <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
                     aria-labelledby="tabs-home-tabVertical">
                    <div className="grid grid-rows-3 grid-cols-4 gap-4">
                        <div className="col-start-1 col-end-4 ..." >
                            <label htmlFor="Environment">Environment:</label>
                            <select
                                className="flex appearance-none w-fit bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-t-md leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                                value={selectedValue}
                                onChange={e => {
                                    setSelectedValue(e.target.value);
                                    handleFrontendRegionChange(e);}}>
                                {environmentArray.map((item, index) => {
                                    return (
                                        <option key={index} value={item.Frontend} className="text-gray-700">
                                            {item.Name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tabs-jenkinsVertical" role="tabpanel"
                     aria-labelledby="tabs-jenkins-tabVertical">
                    Jenkins Tab
                </div>
                <div className="tab-pane fade" id="tabs-rundeckVertical" role="tabpanel"
                     aria-labelledby="tabs-rundeck-tabVertical">
                    Rundeck Tab
                </div>
            </div>
        </div>

    );
}