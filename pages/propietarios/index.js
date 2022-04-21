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

import TableOwners from '../../src/components/TableOwners';


import { useCreateOwner } from "../../src/graphql/owners/ownersHooks";

const { Content } = Layout;
const { Title } = Typography;

const { Item } = Form;
const { Option } = Select;

const initialValues = {
  typePerson: "",
  documentType: "",
  documentNumber: "",
  name: "",
  lastName: "",
  nit: "",
  companyName: "",
  adress: "",
  phone: "",
  email: "",
};

export default function propietarios({}) {
  const [owner, setOwner] = useState(initialValues);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setOwner(initialValues);
    }
    return () => {
      mounted = false;
    };
  }, []);

  const addOwner = useCreateOwner();

  const handleSubmit = () => {
    addOwner({ variables: owner });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOwner({
      ...owner,
      [name]: value,
    });
  };

  return (
    <div>
      <div style={{ padding: 24, minHeight: 360 }}>
        <Title style={{ fontWeight: "bold" }}>Propietarios</Title>
        <Form onFinish={handleSubmit} layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={10}>
              <Item label="Tipo de Persona">
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
            {owner.typePerson === "Natural" ? (
              <Col span={10}>
                <Item label="Tipo de documento">
                  <Select
                    placeholder="Seleccione el tipo de documento"
                    value={owner.documentType}
                    onChange={(e) => setOwner({ ...owner, documentType: e })}
                  >
                    <Option value="Cedula">Cedula</Option>
                  </Select>
                </Item>
              </Col>
            ) : (
              <Col span={10}>
                <Item label="Tipo de documento">
                  <Select
                    placeholder="Seleccione el tipo de documento"
                    value={owner.documentType}
                    onChange={(e) => setOwner({ ...owner, documentType: e })}
                  >
                    <Option value="Nit">Nit</Option>
                  </Select>
                </Item>
              </Col>
            )}
          </Row>
          {owner.documentType !== "Nit" ? (
            <div>
              <Row gutter={[24, 24]}>
                <Col span={10}>
                  <Item label="Numero de documento">
                    <Input
                      type="text"
                      name="documentNumber"
                      value={owner.documentNumber}
                      onChange={handleInputChange}
                    />
                  </Item>
                </Col>
              </Row>
              <Row gutter={[24, 24]}>
                <Col span={10}>
                  <Item label="Nombres">
                    <Input
                      type="text"
                      name="name"
                      value={owner.name}
                      onChange={handleInputChange}
                    />
                  </Item>
                </Col>
                <Col span={10}>
                  <Item label="Apellidos">
                    <Input
                      type="text"
                      name="lastName"
                      value={owner.lastName}
                      onChange={handleInputChange}
                    />
                  </Item>
                </Col>
              </Row>
            </div>
          ) : (
            <Row gutter={[24, 24]}>
              <Col span={10}>
                <Item label="Nit">
                  <Input
                    type="number"
                    name="nit"
                    value={owner.nit}
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
              <Col span={10}>
                <Item label="Razon social">
                  <Input
                    name="companyName"
                    value={owner.companyName}
                    onChange={handleInputChange}
                  />
                </Item>
              </Col>
            </Row>
          )}

          <Row gutter={[24, 24]}>
            <Col span={10}>
              <Item label="Direccion">
                <Input
                  type="text"
                  name="adress"
                  value={owner.adress}
                  onChange={handleInputChange}
                />
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Telefono">
                <Input
                  type="number"
                  name="phone"
                  value={owner.phone}
                  onChange={handleInputChange}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={10}>
              <Item label="Correo electronico">
                <Input
                  type="text"
                  name="email"
                  value={owner.email}
                  onChange={handleInputChange}
                />
              </Item>
            </Col>
            <Col span={10} style={{marginTop: '30px'}}>
              <Button type="primary" htmlType="submit" block>
                Enviar Formulario
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Row gutter={[16, 16]}>
        <TableOwners />
      </Row>
    </div>
  );
}
