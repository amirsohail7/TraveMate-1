import React from 'react'
import { Card } from 'antd';
import Icon from '@ant-design/icons';

const { Meta } = Card;

function CardComponent(props) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={props.cardInfo.fields.description.stringValue}
                    src={props.cardInfo.fields.image.stringValue} 
                    width="100" height="100"
                    />
            }
            /* actions={[
                <a target="_blank" rel="noopener noreferrer" href={props.cardInfo.fields.link.stringValue}>
                    <Icon type="ellipsis" key="ellipsis" />
                </a>
            ]} */
        >
            <Meta
                /* title={props.cardInfo.fields.stack.stringValue} */
                description={props.cardInfo.fields.description.stringValue}
            />

        </Card>

    )
}

export default CardComponent