import axios from "axios";
import {Button, Popconfirm, Table,Form,Input,Space,} from 'antd';
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";


export const DataTable = () => {

    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [editRowKey, setEditRowKey] = useState("")
    const [form] = Form.useForm();

    // GOOD
    useEffect(() => {
        loadData();
    }, []);
    // GOOD
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setGridData(response.data)
        setLoading(false);
    };

    
    const dataWithAge = gridData.map((item) => ({
        ...item,
        age: Math.floor(Math.random() * 6) + 20,
    }));

    const modifiedData = dataWithAge.map(({ body, ...item }) => ({
        ...item,
        key: item.id,
        message: isEmpty(body) ? item.message : body
    }));

    const handleDelete = (value) => {
        const dataSource = [...modifiedData];
        const filteredData = dataSource.filter((item) => item.id !== value.id)
        setGridData(filteredData);
    }

    const isEditing = (record) => {
        return record.key === editRowKey;
    }

    const save = () => {

    }
    const cancel = () => {
        setEditRowKey("");
    }
    const Edit = (record) => {
        form.setFieldsValue({
            name: "",
            email: "",
            message: "",
            ...record
        });
        setEditRowKey(record.key)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',

        },
        {
            title: 'Name',
            dataIndex: 'name',
            align: "center",
            edidTable: true

        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: "center",
            edidTable: true

        },
        {
            title: 'Age',
            dataIndex: 'age',
            align: "center",
            edidTable: false

        },
        {
            title: 'Message',
            dataIndex: 'message',
            align: "center",
            edidTable: true

        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: "center",
            render: (_, record) => {
                const editable = isEditing(record);
                return modifiedData.length >= 1 ? (
                    <Space>
                        <Popconfirm title="Are you sure want to delete ?"
                            onConfirm={() => handleDelete(record)}>
                            <Button danger type="primary" disabled={editable}>
                                Delete
                            </Button>
                        </Popconfirm>

                        {editable ? (

                            <span>
                                <Space size={"middle"}>
                                    <Button onClick={() => save(record.key)} type="primary" style={{ marginRight: 8 }}>Save</Button>
                                    <Popconfirm title="Are you sure to Cancel ?"
                                        onConfirm={cancel}>
                                        <Button  >
                                            Cancel
                                        </Button>
                                    </Popconfirm>
                                </Space>

                            </span>) : <Button type="primary" onClick={() => Edit(record)}>
                            Edit
                        </Button>
                        }
                    </Space>
                ) : null;
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.edidTable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            }),
        }
    });
    const EdittableCell = ({ editing, dataIndex, title, record, children, ...restProps }) => {
        const input = <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item name={dataIndex} Style={{ margin: 0 }} rules={[{
                        required: true,
                        message: `please input some value in ${title} field`,
                    }
                    ]}
                    >
                        {input}
                    </Form.Item>
                ) : (children)}
            </td>
        );
    };
    return (
        <div>
            <Form form={form} component={false}>
                <Table columns={mergedColumns} dataSource={modifiedData} bordered loading={loading} components={{
                    body: {
                        cell: EdittableCell
                    },
                }} />;
            </Form>
        </div>
    );
}