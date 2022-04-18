import {
  Layout,
  Typography,
  Form,
  Select,
  Row,
  Col,
  Input,
  Button,
} from "antd";
import { useEffect, useState } from "react";


import TableBuilds from '../../src/components/TableBuilds';
import { useCreateBuild } from "../../src/graphql/builds/customHooks";

const { Title } = Typography;

const { Item } = Form;
const { Option } = Select;

const initialValues = {
  floorsBuild: '',
  totalAreaBuild: '',
  typeBuild: '',
  adressBuild: ''
};


export default function index() {
  const [build, setBuild] = useState(initialValues);

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setBuild(initialValues);
    }
    return () => {
      mounted = false;
    }
  }, [])
  
  const addBuild = useCreateBuild();

  const handleSubmit = () => {
    addBuild({ variables: build });
    console.log(build)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuild({
      ...build,
      [name]: value,
    })
  }


  return (
    <div>
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
            <Col span={10} style={{ marginTop: "30px" }}>
              <Button type="primary" htmlType="submit" block>
                Enviar Formulario
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Row gutter={[16, 16]}>
        <TableBuilds />
      </Row>
    </div>
  );
}
