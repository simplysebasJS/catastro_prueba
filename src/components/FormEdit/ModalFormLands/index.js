import {
  Typography,
  Form,
  Select,
  Row,
  Col,
  Input,
  Button,
  Modal,
} from "antd";


import { useEffect, useState } from "react";
import { useEditLand } from "../../../../src/graphql/lands/landsHooks";

const { Title } = Typography;

const { Item } = Form;
const { Option } = Select;

const initialValues = {
  areaLand: '',
  haveBuild: '',
  typeLand: '',
  waterSourcesLand: '',
  commercialValue: ''
};

export default function ModalFormLands({ modalVisible, setModalVisible, landEdit }) {
  const [land, setLand] = useState(initialValues);

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setLand(landEdit);
    }
    return () => {
      mounted = false;
    }
  }, [])

  const editLand = useEditLand();

  const handleSubmit = () => {
    editLand({ variables: { idToEdit: land.id, ...land } });
    setModalVisible(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLand({
      ...land,
      [name]: value,
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
        <div style={{ padding: 24, minHeight: 360 }}>
          <Title style={{ fontWeight: "bold" }}>Terrenos</Title>
          <Form onFinish={handleSubmit} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={10}>
                <Item label="Área">
                  <Input
                    type="number"
                    name="areaLand"
                    value={land.areaLand}
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Valor comercial">
                  <Input
                    type="number"
                    name="valor_comercial"
                    value={land.commercialValue}
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Fuentes de agua">
                  <Select
                    placeholder="Seleccione respuesta"
                    value={land.waterSourcesLand}
                    onChange={(e) => setLand({ ...land, waterSourcesLand: e })}
                  >
                    <Option value="Si">Si</Option>
                    <Option value="No">No</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Tipo de terreno">
                  <Select
                    placeholder="Seleccione el tipo de persona"
                    value={land.typeLand}
                    onChange={(e) => setLand({ ...land, typeLand: e })}
                  >
                    <Option value="Rural">Rural</Option>
                    <Option value="Urbano">Urbano</Option>
                    <Option value="Residencial">Residencial</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={10}>
                <Item label="¿Tiene Construcciones?">
                  <Select
                    placeholder="Seleccione respuesta"
                    value={land.haveBuild}
                    onChange={(e) => setLand({ ...land, haveBuild: e })}
                  >
                    <Option value="Si">Si</Option>
                    <Option value="No">No</Option>
                  </Select>
                </Item>
              </Col>
              
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
