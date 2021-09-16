import React, { useState } from "react";
import {DragDropContext} from 'react-beautiful-dnd';
import initialData from "./ComponentsList";
import Column from "../Column/Column";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../../features/activeCompState/activeCompStateSlice";

export const ComponentColumn = () => {

    const [state, setState] = useState(initialData);
    const dispatch = useDispatch();

    const onDragEnd = (result) => {
        const { destination, source, draggableId} = result;

        if(!destination){
            return;
        }

        console.log(result);


        

        if(source.droppableId === 'componentColumn' && destination.droppableId==='activeComponent'){
            if(draggableId){
                console.log('draggableID',draggableId);

                dispatch(setActiveComponent(draggableId));

            }
            // const start = state.columns[source.droppableId];
            const finish = state.columns[destination.droppableId];
            // const startComponentIds = Array.from(start.componentIDs);
            const finishComponentIds = Array.from(finish.componentIDs);
            finishComponentIds[0] = draggableId;
            const newFinish = {
                ...finish,
                componentIDs: finishComponentIds
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newFinish.id]: newFinish
                }
            };

            setState(newState);
        }

        // const startComponentIds = Array.from(start.componentIDs);
        
        // console.log(startComponentIds);

        // const finishComponentIds = Array.from(finish.componentIDs);
        // finishComponentIds[0] = draggableId;
        // const newFinish = {
        //     ...finish,
        //     componentIDs: finishComponentIds
        // };

        // const newState = {
        //     ...state,
        //     columns: {
        //         ...state.columns,
        //         [newFinish.id]: newFinish
        //     }
        // };

        // setState(newState);
         

    }
    // console.log('state', state.columnOrder[0])

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                {/* <Column key={componentColumn.id} column={state.columns.componentColumn} components={components} /> */}
                {state.columnOrder.map((columnId) => {
                    // console.log(state.columns)
                    // console.log(state.column)
                    // console.log(state.columns[columnId]);
                    const column = state.columns[columnId];
                
                    const components = column.componentIDs.map((componentID) => {
                        return state.components.get(componentID)
                    })
                    // console.log(components);
                    return <Column key={column.id} column={column} components={components} />
                })}
            </DragDropContext>
            
            
    </>
    
    )
    
}

// destination:
// droppableId: "component-column"
// index: 1
// [[Prototype]]: Object
// draggableId: "card"
// mode: "FLUID"
// reason: "DROP"
// source:
// droppableId: "component-column"
// index: 0
// [[Prototype]]: Object
// type: "DEFAULT"


