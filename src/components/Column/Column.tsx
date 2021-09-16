import React from "react";
import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    margin: 8px;
    border: 1px solid gray;
    border-radius: 2px;
    background-color: white;
    display: flex;
    flex-direction: column
    // width: 320px
`;

const Title = styled.h3`
    padding: 8px
`;
const ComponentList = styled.div`
    padding: 8px;
    flex-grow: 1;
    min-height: 100px
`;

const Column = (props:any) =>{
    console.log(props)
    return(
        <Container>
            <Title>
                {props.column.title}
            </Title>
            <Droppable droppableId={props.column.id}>
                {provided=> (
                    <ComponentList ref={provided.innerRef} {...provided.droppableProps}>
                        {props.column.id === 'activeComponent' 
                        ? 
                            props.components.map((comp:any) =>
                                (<comp.mappedComponent activeComponent={comp.id}/>)
                            ) 
                        : 
                            props.components.map((comp:any, index: number) => 
                                (<Component key={comp.id} component={comp} index={index}/>)
                            )
                        }
                        {/* {props.components.map((comp:any, index: number) => 
                                (<Component key={comp.id} component={comp} index={index}/>)
                            )} */}
                        {provided.placeholder}
                    </ComponentList>
                )}
                
            </Droppable>
           
        </Container>
    )
}

const Component =(props:any) => {
    return(
        <>
            <Draggable draggableId={props.component.id} index={props.index}>

                {provided => (
                    <Container 
                        ref = {provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                    {props.component.content}
                    </Container>    
                )}
            </Draggable>
            
        </>
    )
}

export default Column;
