import { Divider } from 'antd';
import React from 'react'
import { Card } from 'antd';

import { connect } from "react-redux";
import { removeMessage } from '../action/publish';

const Publish = ({publishes, remove}) => {
    return (
        <Card style={{ width: 300 }}>
            {
                publishes.map((publish) => (
                    <Card key = {publish.id}>
                        {publish.title}
                    </Card>
                ))
            }
        </Card>
    );
};

const mapStateToProps = state => ({
    publishes: state.publishes,
})

const mapDispatchToProps = dispatch => ({
    remove: id => {
        dispatch(removeMessage(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Publish);