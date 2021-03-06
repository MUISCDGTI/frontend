import {useState} from "react";
import { Input, Form, Typography, Button } from 'antd';


function CreateNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [relatedMovies, setRelatedMovies] = useState('');
    const [urlImagen, setUrlImagen] = useState('');

    const { Title } = Typography;

    function onClick() {
        const newNews ={
            title: title,
            description: description,
            text: text,
            author: author,
            createdAt: createdAt,
            relatedMovies: relatedMovies,
            urlImagen: urlImagen,
        };
        const result = props.onAddNews(newNews);
        

        if (result) {
            setTitle('');
            setDescription('');
            setText('');
            setAuthor('Autor de EJEMPLO');
            setCreatedAt('Fecha de creación de EJEMPLO');
            setRelatedMovies('');
            setUrlImagen('');
        }

        props.onAddNews(newNews);
    }
//            <input className="form-control" name="description" value={description}  onChange={(event) => setDescription(event.target.value)}/>
    return (
        <div>
            <br/><br/><br/>
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Title level={3}
                    layout="horizontal">Publicar nueva noticia</Title>
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[
                        { required: true, message:'El título no puede estar vacío'},
                        { type: 'string', min: 4 , message:'El título debe tener al menos 4 caracteres.'}
                    ]}
            
                >
                    <Input 
                    placeholder="Título de la noticia" 
                    className="form-control" 
                    // name="title" 
                    // value={title}  
                    onChange={(event) => setTitle(event.target.value)} 
                    style={{ width: '60%' }}/>
                    
                </Form.Item>
                
                <Form.Item
                    name="description"
                    label = "Subtítulo"
                    rules={[
                        { required: true, message:'El subtítulo no puede estar vacío' },
                        { type: 'string', min: 4 , message:'El subtítulo debe tener al menos 4 caracteres.'}
                    ]
                }
                >
                <Input.TextArea 
                    placeholder="Subtítulo de la noticia" 
                    // name="description" 
                    // value={description} 
                    allowClear 
                    onChange={(event) => setDescription(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>
                
                <Form.Item
                    name="text"
                    label = "Cuerpo de la noticia"
                    rules={[
                        {required: true, message:'El cuerpo no puede estar vacío'},
                        { type: 'string', min: 50 , message:'El cuerpo debe tener al menos 50 caracteres.'}
                    ]}
                    
                >
                    <Input.TextArea 
                    placeholder="Cuerpo de la noticia" 
                    // name="text" 
                    // value={text} 
                    allowClear 
                    onChange={(event) => setText(event.target.value)} 
                    style={{ width: '60%' }} 
                    />
                </Form.Item>

                <Form.Item
                    name="urlImagen"
                    label = "Enlace de la imagen"
                    // rules={[{ required: true }]}            
                >
                    <Input type="url" 
                    placeholder="http://www.imagen.com/id1" 
                    // name="urlImagen" 
                    // value={urlImagen} 
                    allowClear 
                    onChange={(event) => setUrlImagen(event.target.value)} 
                    style={{ width: '60%' }} 
                    />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" onClick={onClick} htmlType="submit" > Crear noticia </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateNews;