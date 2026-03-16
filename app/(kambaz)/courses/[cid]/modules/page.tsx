"use client";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ListGroup, FormControl } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./modulesControls";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  return (
    <div className="wd-modules">
      <ModulesControls 
      moduleName={moduleName} 
      setModuleName={setModuleName}
      addModule={() => {
      dispatch(addModule({ name: moduleName, course: String(cid) }));
      setModuleName("");
      }} />
      
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === String(cid))
          .map((module: any) => (
            <ListGroup.Item key={module._id} className="d-flex align-items-center">
              <div>
                {!module.editing && module.name}
                { module.editing && (
                  <FormControl 
                  className="w-50 d-inline-block"
                  defaultValue={module.name} 
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                  />  
                )}
                </div>

                <ModuleControlButtons 
                moduleId={module._id}
                deleteModule={(moduleId) => { dispatch(deleteModule(moduleId))}}
                editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
    
  );
}

