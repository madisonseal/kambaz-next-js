"use client";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as client from "../../client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { useParams } from "next/navigation";
import { useState, useEffect} from "react";
import { ListGroup, FormControl } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./modulesControls";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
  };


  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid as string, moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    await client.updateModule(cid as string , module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };



  return (
    <div className="wd-modules">
      <ModulesControls 
      moduleName={moduleName} 
      setModuleName={setModuleName}
      addModule={() => {
      onCreateModuleForCourse
      }} />
      
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
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
                        onUpdateModule({ ...module, editing: false });

                      }
                    }}
                  />  
                )}
                </div>

                <ModuleControlButtons 
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
    
  );
}

