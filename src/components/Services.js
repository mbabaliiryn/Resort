import React, { Component } from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "idefds ureyfbwiedcz kjdanodiawdsnawdxsj vf"
            },
            {
                icon: <FaHiking/>,
                title: "free FaHiking",
                info: "idefds ureyfbwiedcz kjdanodiawdsnawdxsj vf"
            },
            {
                icon: <FaShuttleVan/>,
                title: "free FaShuttleVan",
                info: "idefds ureyfbwiedcz kjdanodiawdsnawdxsj vf"
            },
            {
                icon: <FaBeer/>,
                title: "free FaBeer",
                info: "idefds ureyfbwiedcz kjdanodiawdsnawdxsj vf"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    } )}
                </div>
                
            </section>
        );
    }
}
