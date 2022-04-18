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

const { Content } = Layout;
const { Title } = Typography;

const { Item } = Form;
const { Option } = Select;

export default function index() {
  return (
    <div>
      <div style={{ padding: 24, minHeight: 360 }}>
        <Title style={{ fontWeight: "bold" }}>Predios</Title>
        <Form /* onFinish={handleSubmit} */ layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={10}>
              <Item label="Nombre de propietario">
                <Select>
                  <Option value="">Traer Datos Api</Option>
                </Select>
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Construcciones">
                <Select>
                  <Option value="">Traer Datos Api</Option>
                </Select>
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Terreno">
                <Select>
                  <Option value="">Traer Datos Api</Option>
                </Select>
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
    </div>
  );
}
