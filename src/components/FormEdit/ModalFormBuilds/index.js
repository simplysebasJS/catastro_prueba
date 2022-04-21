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
import { useEditBuild } from "../../../graphql/builds/buildsHooks";


const { Title } = Typography;

const { Item } = Form;
const { Option } = Select;

const initialValues = {
  floorsBuild: '',
  totalAreaBuild: '',
  typeBuild: '',
  adressBuild: ''
};


export default function ModalFormBuilds({ modalVisible, setModalVisible, buildEdit }) {

  const [build, setBuild] = useState(initialValues)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setBuild(buildEdit);
    }
    return () => {
      mounted = false;
    }
  }, [])

    const editBuild = useEditBuild();

    const handleSubmit = () => {
        editBuild({ variables: {idToEdit: build.id, ...build} })
        setModalVisible(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuild({
            ...build,
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
        <div style={{ padding: 24, minHeight: 360 }}>
          <Title style={{ fontWeight: "bold" }}>Construcciones</Title>
          <Form onFinish={handleSubmit} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={10}>
                <Item label="Número de pisos">
                  <Input 
                    type="number" 
                    name="floorsBuild" 
                    value={build.floorsBuild}
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Área total">
                  <Input 
                    type="number" 
                    name="totalAreaBuild" 
                    value={build.totalAreaBuild}                
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Tipo de construcción">
                  <Select 
                    placeholder="Seleccione el tipo de construcción"
                    value={build.typeBuild}
                    onChange={(e) => setBuild({ ...build, typeBuild: e})}    
                  >
                    <Option value="Industrial">Industrial</Option>
                    <Option value="Comercial">Comercial</Option>
                    <Option value="Residencial">Residencial</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Direccion">
                  <Input 
                    type="text"
                    name="adressBuild" 
                    value={build.adressBuild}
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  )
}
