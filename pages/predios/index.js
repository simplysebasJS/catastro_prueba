import {
  Typography,
  Form,
  Select,
  Row,
  Col,
  Button,
} from "antd";
import { useEffect, useState } from "react";
import { useGetBuilds } from "../../src/graphql/builds/buildsHooks";
import { useGetLands } from "../../src/graphql/lands/landsHooks";



import { useCreateProperty, useGetSelectsData } from "../../src/graphql/properties/propertiesHooks"

const { Title } = Typography;

const { Item } = Form;
const { Option } = Select;

const initialValues = {
  owner: 0,
  build: 0,
  lands: 0
}


export default function predios() {
  const [property, setProperty] = useState(initialValues)
  const {data} = useGetSelectsData();
  console.log(data.allBuilds)





  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setProperty(initialValues);


    }
    return () => {
      mounted = false
    };
  }, [])

  const addProperty = useCreateProperty();

  const handleSubmit = () => {
    addProperty({ variables: property });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value
    })
  }


  return (
    <div>
      <div style={{ padding: 24, minHeight: 360 }}>
        <Title style={{ fontWeight: "bold" }}>Predios</Title>
        <Form /* onFinish={handleSubmit} */ layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={10}>
              <Item label="Nombre de propietario">
                <Select
                  placeholder="Seleccione el propietario"
                  value={property.owner}
                  onChange={(e) => setProperty({ ...property, owner: e })}
                >
                  {/* {
                    data.allOwners.map((e) => {
                      return (
                        <Option value={e.id}>{e.name}</Option>
                      )
                    })
                  } */}
                </Select>
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Construcciones">
                <Select>
                </Select>
              </Item>
            </Col>
            <Col span={10}>
              <Item label="Terreno">
                <Select>
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
