import { Table, Button, Popconfirm, Row, Col } from 'antd'
import { useState } from 'react';
import { useDeleteBuild, useGetBuilds } from '../../graphql/builds/buildsHooks'
import ModalFormBuilds from '../../../src/components/FormEdit/ModalFormBuilds';


export default function TableBuilds() {
    const { data, loading } = useGetBuilds();

    const deleteBuild = useDeleteBuild();

    const [modalVisible, setModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [build, setBuild] = useState({});

    const showBuild = (build) => {
        setBuild(build)
        setModalVisible(true);
        setIsEditing(true);
    }

    const openModal = () => {
        setModalVisible(true);
        setIsEditing(false);
    }

    const deleteBuildById = id => {
        deleteBuild({ variables: { idToDelete: id } });
    }

    const columns = [
        {
            title: "Numero de pisos",
            dataIndex: "floorsBuild",
            key: "floorsBuild"
        },
        {
            title: "Área total",
            dataIndex: "totalAreaBuild",
            key: "totalAreaBuild"
        },
        {
            title: "Tipo de construcción",
            dataIndex: "typeBuild",
            key: "typeBuild"
        },
        {
            title: "Direccion",
            dataIndex: "adressBuild",
            key: "adressBuild"
        },
        {
            title: "Editar",
            key: "editing",
            render: (x) => {
                return (
                    <div>
                        <Button type="primary" onClick={() => showBuild(x)}>Editar</Button>
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
                        title="Deseas eliminar esta contrucción?"
                        onConfirm={() => { deleteBuildById(x.id) }}
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
                            <Table columns={columns} dataSource={data.allBuilds.nodes} />
                        )
                    }

                    {modalVisible &&
                        <ModalFormBuilds modalVisible={modalVisible} setModalVisible={setModalVisible} isEditing={isEditing} buildEdit={build} />
                    }
                </Col>
            </Row>
        </>
    )
}