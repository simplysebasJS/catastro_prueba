import {
    Form,
    Input,
    Select,
    Col,
    Row,
    Modal
} from 'antd';

import { useEffect, useState } from "react";
import { useEditOwner } from '../../../graphql/owners/customHooks';

const { Item } = Form;
const { Option } = Select;

const initialValues = {
    typePerson: '',
    documentType: '',
    documentNumber: '',
    fullName: '',
    lastName: '',
    nit: '',
    companyName: '',
    adress: '',
    phone: '',
    email: ''
}

export default function ModalFormOwners({ modalVisible, setModalVisible, ownerEdit }) {

    const [owner, setOwner] = useState(initialValues)

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            setOwner(ownerEdit)
        }
        return () => {
            mounted = false
        }
    }, []);

    const editOwner = useEditOwner();

    const handleSubmit = () => {
        editOwner({ variables: { idToEdit: owner.id, ...owner } })
        setModalVisible(false)
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOwner({
            ...owner,
            [name]: value
        })
    }

    return (
        <div>
            <Modal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                width={1000}
                onOk={handleSubmit}
            >
                <Form
                    onFinish={handleSubmit}
                >
                    <Row gutter={[24, 24]}>
                        <Col span={10}>
                            <Item
                                label="Tipo de Persona"
                            >
                                <Select
                                    placeholder="Seleccione el tipo de persona"
                                    value={owner.typePerson}
                                    onChange={(e) => setOwner({ ...owner, typePerson: e })}
                                >
                                    <Option value="Natural">Persona Natural</Option>
                                    <Option value="Juridica">Persona Juridica</Option>
                                </Select>
                            </Item>
                        </Col>
                        {
                            owner.typePerson === 'Natural'
                                ? (
                                    <Col span={10}>
                                        <Item
                                            label="Tipo de documento"
                                        >
                                            <Select
                                                placeholder="Seleccione el tipo de documento"
                                                value={owner.documentType}
                                                onChange={(e) => setOwner({ ...owner, documentType: e })}
                                            >
                                                <Option value="Cedula">Cedula</Option>
                                            </Select>
                                        </Item>
                                    </Col>
                                )
                                : (
                                    <Col span={10}>
                                        <Item
                                            label="Tipo de documento"
                                        >
                                            <Select
                                                placeholder="Seleccione el tipo de documento"
                                                value={owner.documentType}
                                                onChange={(e) => setOwner({ ...owner, documentType: e })}
                                            >
                                                <Option value="Nit">Nit</Option>
                                            </Select>
                                        </Item>
                                    </Col>
                                )
                        }
                    </Row>
                    {
                        owner.documentType !== 'Nit'
                            ? (
                                <div>
                                    <Row gutter={[24, 24]}>
                                        <Col span={10}>
                                            <Item
                                                label="Numero de documento"
                                            >
                                                <Input
                                                    name="documentNumber"
                                                    value={owner.documentNumber}
                                                    onChange={handleInputChange}
                                                />
                                            </Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={[24, 24]}>
                                        <Col span={10}>
                                            <Item
                                                label="Nombres"
                                            >
                                                <Input
                                                    name="name"
                                                    value={owner.name}
                                                    onChange={handleInputChange}
                                                />
                                            </Item>
                                        </Col>
                                        <Col span={10}>
                                            <Item
                                                label="Apellidos"

                                            >
                                                <Input
                                                    name="lastName"
                                                    value={owner.lastName}
                                                    onChange={handleInputChange}
                                                />
                                            </Item>
                                        </Col>
                                    </Row>
                                </div>
                            )
                            : (
                                <Row gutter={[24, 24]}>
                                    <Col span={10}>
                                        <Item
                                            label="Nit"

                                        >
                                            <Input
                                                name="nit"
                                                value={owner.nit}
                                                onChange={handleInputChange}
                                            />
                                        </Item>
                                    </Col>
                                    <Col span={10}>
                                        <Item
                                            label="Razon social"

                                        >
                                            <Input
                                                name="companyName"
                                                value={owner.companyName}
                                                onChange={handleInputChange}
                                            />
                                        </Item>
                                    </Col>
                                </Row>
                            )
                    }

                    <Row gutter={[24, 24]}>
                        <Col span={10}>
                            <Item
                                label="Direccion"
                            >
                                <Input
                                    name="adress"
                                    value={owner.adress}
                                    onChange={handleInputChange}
                                />
                            </Item>
                        </Col>
                        <Col span={10}>
                            <Item
                                label="Telefono"
                            >
                                <Input
                                    name="phone"
                                    value={owner.phone}
                                    onChange={handleInputChange}
                                />
                            </Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                        <Col span={10}>
                            <Item
                                label="Correo electronico"
                            >
                                <Input
                                    name="email"
                                    value={owner.email}
                                    onChange={handleInputChange}
                                />
                            </Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    )
}
