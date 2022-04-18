import { Table, Button, Popconfirm, Row, Col } from 'antd'
import { useState } from 'react';
import { useDeleteOwner, useGetOwners } from '../../graphql/owners/customHooks'
import ModalFormOwners from '../../../src/components/FormEdit/ModalFormOwners';





export default function TableOwners() {
    const { data, loading } = useGetOwners();

    const deleteOwner = useDeleteOwner();

    const [modalVisible, setModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [owner, setOwner] = useState({});


    const showOwner = (owner) => {
        setOwner(owner)
        setModalVisible(true);
        setIsEditing(true);
    }

    const openModal = () => {
        setModalVisible(true);
        setIsEditing(false);
    }

    const deleteOwnerById = id => {
        deleteOwner({ variables: { idToDelete: id } });
    }


    const columns = [
        {
            title: "Nombres",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Apellidos",
            dataIndex: "lastName",
            key: "lastName"
        },
        {
            title: "Tipo de Persona",
            dataIndex: "typePerson",
            key: "typePerson"
        },
        {
            title: "Tipo de documento",
            dataIndex: "documentType",
            key: "documentType"
        },
        {
            title: "Numero de documento",
            dataIndex: "documentNumber",
            key: "documentNumber"
        },
        {
            title: "Nit",
            dataIndex: "nit",
            key: "nit"
        },
        {
            title: "Razon social",
            dataIndex: "companyName",
            key: "companyName"
        },
        {
            title: "Direccion",
            dataIndex: "adress",
            key: "adress"
        },
        {
            title: "Telefono",
            dataIndex: "phone",
            key: "phone"
        },
        {
            title: "Correo",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Editar",
            key: "editing",
            render: (x) => {
                return (
                    <div>
                        <Button type="primary" onClick={() => showOwner(x)}>Editar</Button>
                    </div>
                )
            }
        },
        {
            title: "Eliminar",
            key: "deleting",
            render: (x) => {
                return (
                    <Popconfirm
                        title="Deseas eliminar este propietario?"
                        onConfirm={() => { deleteOwnerById(x.id) }}
                        okText="Si"
                        cancelText="No"
                    >
                        <Button type='danger'>Eliminar</Button>
                    </Popconfirm>
                )
            }
        }
    ]

    return (
        <>
            <Row>
                <Col span={24}>
                    {loading
                        ? <p>Loading</p>
                        :
                        (
                            <Table columns={columns} dataSource={data.allOwners.nodes} />
                        )
                    }

                    {modalVisible &&
                        <ModalFormOwners modalVisible={modalVisible} setModalVisible={setModalVisible} isEditing={isEditing} ownerEdit={owner} />
                    }
                </Col>
            </Row>
        </>
    )
}