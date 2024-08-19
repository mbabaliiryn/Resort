import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeatureRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { loading, featuredRooms: rooms } = this.context;

        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? (
                        <Loading />
                    ) : (
                        rooms.map(room => <Room key={room.id} room={room} />)
                    )}
                </div>
                <Loading />
            </section>
        );
    }
}
