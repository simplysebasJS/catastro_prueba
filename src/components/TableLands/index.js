import { Table, Button, Popconfirm, Row, Col } from 'antd'
import { useState } from 'react';
import { useDeleteLand, useGetLands } from '../../graphql/lands/landsHooks'
import ModalFormLands from '../../../src/components/FormEdit/ModalFormLands';


export default function TableLands() {
  const { data, loading } = useGetLands();

  const deleteLand = useDeleteLand();

  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [land, setLand] = useState({});

  const showLand = (land) => {
    setLand(land)
    setModalVisible(true);
    setIsEditing(true);
  }

  const openModal = () => {
    setModalVisible(true);
    setIsEditing(false);
  }

  const deleteLandById = id => {
    deleteLand({ variables: { idToDelete: id } });
  }

  const columns = [
    {
      title: "Área",
      dataIndex: "areaLand",
      key: "areaLand"
    },
    {
      title: "Valor Comercial",
      dataIndex: "commercialValue",
      key: "commercialValue"
    },
    {
      title: "Fueste de agua",
      dataIndex: "waterSourcesLand",
      key: "waterSourcesLand"
    },
    {
      title: "Tipo de terreno",
      dataIndex: "typeLand",
      key: "typeLand"
    },
    {
      title: "Construcciones",
      dataIndex: "haveBuild",
      key: "haveBuild"
    },
    {
      title: "Editar",
      key: "editing",
      render: (x) => {
        return (
          <div>
            <Button type="primary" onClick={() => showLand(x)}>Editar</Button>
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
            title="Deseas eliminar este terreno?"
            onConfirm={() => { deleteLandById(x.id) }}
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
              <Table columns={columns} dataSource={data.allLands.nodes} />
            )
          }

          {modalVisible &&
            <ModalFormLands modalVisible={modalVisible} setModalVisible={setModalVisible} isEditing={isEditing} landEdit={land} />
          }
        </Col>
      </Row>
    </>
  )
}