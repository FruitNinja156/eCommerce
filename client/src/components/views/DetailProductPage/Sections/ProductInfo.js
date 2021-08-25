import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Modal } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const showContactDetail = () => {
        setIsModalVisible(true);
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Descriptions title="Service Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Rating">8/10</Descriptions.Item>
                <Descriptions.Item label="View"> 34</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={showContactDetail}
                >
                    Get Contacts
                </Button>
            </div>
            <Modal title="Contact Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Service Provider's Phone Number : </p>
                <p>{Product.phone}</p>

            </Modal>
        </div>
    )
}

export default ProductInfo
