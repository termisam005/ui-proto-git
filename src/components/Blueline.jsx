import React, { Component } from "react";
import $ from "jquery";

class Blueline extends Component {

    componentDidMount() {
        $(function () {
            $(".nation_bar").click(function () {
                $(".nation_bar").removeClass("on");
                $(this).addClass("on");
            });
        });
    }

    render() {

        const nationBars = [
            { city: 'Chicago', mm: 'PM', time: 10, minutes: 24, hour: '-9h' },
            { city: 'Tokyo', mm: 'PM', time: 5, minutes: 22, hour: '-5' },
            { city: 'London', mm: 'PM', time: 10, minutes: 24, hour: '-9' },
            { city: 'Seoul', mm: 'PM', time: 10, minutes: 24, hour: '0' },
            { city: 'New york', mm: 'PM', time: 9, minutes: 22, hour: '+1' },
        ];

        const renderBars = nationBars.map(nationbar => {
            return (
                <article className="nation_bar" key={nationbar.city}>
                    <p className="call">{nationbar.city}</p>
                    <div className="time">
                        <span>{nationbar.mm}</span>
                        <span className="when">
                            {nationbar.time}:{nationbar.minutes}
                        </span>
                        <span>{nationbar.hour}</span>
                    </div>
                </article>
            );
        });

        return (
            <section className="blue_line">
                {renderBars}

                {/* <article className="nation_bar">
                <p className="call">{nationBars[0].city}</p>
                <div className="time">
                    <span>{nationBars[0].mm}</span>
                    <span className="when">
                        {nationBars[0].time}:{nationBars[0].minutes}
                    </span>
                    <span>{nationBars[0].hour}</span>
                </div>
            </article>
            <article className="nation_bar">
                <p className="call">{nationBars[1].city}</p>
                <div className="time">
                    <span>{nationBars[1].mm}</span>
                    <span className="when">
                        {nationBars[1].time}:{nationBars[1].minutes}
                    </span>
                    <span>{nationBars[1].hour}</span>
                </div>
            </article>
            <article className="nation_bar">
                <p className="call">{nationBars[2].city}</p>
                <div className="time">
                    <span>{nationBars[2].mm}</span>
                    <span className="when">
                        {nationBars[2].time}:{nationBars[2].minutes}
                    </span>
                    <span>{nationBars[2].hour}</span>
                </div>
            </article>
            <article className="nation_bar">
                <p className="call">{nationBars[3].city}</p>
                <div className="time">
                    <span>{nationBars[3].mm}</span>
                    <span className="when">
                        {nationBars[3].time}:{nationBars[3].minutes}
                    </span>
                    <span>{nationBars[3].hour}</span>
                </div>
            </article>
            <article className="nation_bar">
                <p className="call">{nationBars[4].city}</p>
                <div className="time">
                    <span>{nationBars[4].mm}</span>
                    <span className="when">
                        {nationBars[4].time}:{nationBars[4].minutes}
                    </span>
                    <span>{nationBars[4].hour}</span>
                </div>
            </article> */}
            </section>
        );
    }
}

export default Blueline;