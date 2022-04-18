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
        <Title style={{ fontWeight: "bold" }}>Terrenos</Title>
        <Form /* onFinish={handleSubmit} */ layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={10}>
              <Item label="Área">
                <Input type="number" name="area" />
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Valor comercial">
                <Input type="number" name="valor_comercial" />
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Fuentes de agua">
                <Select>
                  <Option value="Si">Si</Option>
                  <Option value="No">No</Option>
                </Select>
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Tipo de terreno">
                <Select placeholder="Seleccione el tipo de persona">
                  <Option value="Rural">Rural</Option>
                  <Option value="Urbano">Urbano</Option>
                  <Option value="Residencial">Residencial</Option>
                </Select>
              </Item>
            </Col>
            <Col span={10}>
              <Item label="¿Tiene Construcciones?">
                <Select>
                  <Option value="Si">Si</Option>
                  <Option value="No">No</Option>
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
