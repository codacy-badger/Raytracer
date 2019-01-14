var N = null;var searchIndex = {};
searchIndex["raytracer"]={"doc":"","items":[[5,"random_scene","raytracer","Generates a random scene of n-4 tiny spheres, 1 large that…",N,[[["usize"]],["hitablelist"]]],[5,"color","","",N,[[["ray"],["hitablelist"],["u32"]],["vec3"]]],[5,"main","","",N,[[]]],[0,"args","","",N,N],[5,"parse_args","raytracer::args","",N,N],[0,"camera","raytracer","",N,N],[3,"Camera","raytracer::camera","",N,N],[12,"origin","","",0,N],[12,"lower_left_corner","","",0,N],[12,"horizontal","","",0,N],[12,"vertical","","",0,N],[12,"lens_radius","","",0,N],[12,"u","","",0,N],[12,"v","","",0,N],[11,"new","","",0,[[["vec3"],["vec3"],["vec3"],["f64"],["f64"],["f64"],["f64"]],["camera"]]],[11,"get_ray","","",0,[[["self"],["f64"],["f64"]],["ray"]]],[0,"hitable","raytracer","",N,N],[3,"HitRecord","raytracer::hitable","",N,N],[12,"t","","",1,N],[12,"p","","",1,N],[12,"normal","","",1,N],[12,"material","","",1,N],[0,"hitable_list","","",N,N],[3,"HitableList","raytracer::hitable::hitable_list","",N,N],[12,"length","","",2,N],[12,"list","","",2,N],[4,"HITABLE","","",N,N],[13,"SPHERE","","",3,N],[11,"new","","",2,[[["vec",["hitable"]]],["hitablelist"]]],[0,"sphere","raytracer::hitable","",N,N],[3,"Sphere","raytracer::hitable::sphere","",N,N],[12,"center","","",4,N],[12,"radius","","",4,N],[12,"material","","",4,N],[11,"new","","",4,[[["vec3"],["f64"],["material"]],["sphere"]]],[8,"Hitable","raytracer::hitable","",N,N],[10,"hit","","",5,[[["self"],["ray"],["f64"],["f64"],["hitrecord"]],["bool"]]],[11,"new","","",1,[[],["hitrecord"]]],[0,"material","raytracer","",N,N],[4,"MATERIAL","raytracer::material","",N,N],[13,"Lambertian","","",6,N],[13,"Metal","","",6,N],[13,"Dielectric","","",6,N],[13,"Empty","","",6,N],[0,"dielectric","","",N,N],[3,"Dielectric","raytracer::material::dielectric","",N,N],[12,"refractive_index","","",7,N],[5,"schlick","","",N,[[["f64"],["f64"]],["f64"]]],[11,"new","","",7,[[["f64"]],["dielectric"]]],[0,"lambertian","raytracer::material","",N,N],[3,"Lambertian","raytracer::material::lambertian","",N,N],[12,"albedo","","",8,N],[11,"new","","",8,[[["vec3"]],["lambertian"]]],[0,"metal","raytracer::material","",N,N],[3,"Metal","raytracer::material::metal","",N,N],[12,"albedo","","",9,N],[12,"fuzz","","",9,N],[11,"new","","",9,[[["vec3"],["f64"]],["metal"]]],[8,"Scatter","raytracer::material","",N,N],[10,"scatter","","",10,[[["self"],["ray"],["hitrecord"],["vec3"],["ray"]],["bool"]]],[0,"ray","raytracer","",N,N],[3,"Ray","raytracer::ray","",N,N],[12,"a","","",11,N],[12,"b","","",11,N],[11,"new","","",11,[[["vec3"],["vec3"]],["ray"]]],[11,"origin","","",11,[[["self"]],["vec3"]]],[11,"direction","","",11,[[["self"]],["vec3"]]],[11,"point_at_parameter","","",11,[[["self"],["f64"]],["vec3"]]],[0,"vector","raytracer","",N,N],[3,"Vec3","raytracer::vector","",N,N],[12,"data","","Vector class",12,N],[11,"new","","",12,[[["f64"],["f64"],["f64"]],["vec3"]]],[11,"new_from","","",12,[[["vec3"]],["vec3"]]],[11,"zeros","","",12,[[],["vec3"]]],[11,"ones","","",12,[[],["vec3"]]],[11,"x","","",12,[[["self"]],["f64"]]],[11,"y","","",12,[[["self"]],["f64"]]],[11,"z","","",12,[[["self"]],["f64"]]],[11,"r","","",12,[[["self"]],["f64"]]],[11,"g","","",12,[[["self"]],["f64"]]],[11,"b","","",12,[[["self"]],["f64"]]],[11,"length","","",12,[[["self"]],["f64"]]],[11,"squared_length","","",12,[[["self"]],["f64"]]],[11,"unit_vector","","",12,[[["vec3"]],["vec3"]]],[11,"reflect","","",12,[[["self"],["vec3"]],["vec3"]]],[11,"refract","","",12,[[["self"],["vec3"],["f64"],["vec3"]],["bool"]]],[11,"make_unit_vector","","",12,[[["self"]]]],[11,"dot","","",12,[[["vec3"],["vec3"]],["f64"]]],[11,"cross","","",12,[[["vec3"],["vec3"]],["vec3"]]],[11,"apply","","",12,[[["self"],["f"]],["vec3"]]],[11,"all","","",12,[[["self"],["f"]],["bool"]]],[11,"random_in_unit_sphere","","",12,[[],["vec3"]]],[11,"random_in_unit_disk","","",12,[[],["vec3"]]],[11,"into","raytracer::camera","",0,[[["self"]],["u"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"into","raytracer::hitable","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"into","raytracer::hitable::hitable_list","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"into","raytracer::hitable::sphere","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"into","raytracer::material","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"into","raytracer::material::dielectric","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"into","raytracer::material::lambertian","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"into","raytracer::material::metal","",9,[[["self"]],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"into","raytracer::ray","",11,[[["self"]],["u"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"into","raytracer::vector","",12,[[["self"]],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"to_string","","",12,[[["self"]],["string"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"hit","raytracer::hitable::hitable_list","",2,[[["self"],["ray"],["f64"],["f64"],["hitrecord"]],["bool"]]],[11,"hit","raytracer::hitable::sphere","",4,[[["self"],["ray"],["f64"],["f64"],["hitrecord"]],["bool"]]],[11,"scatter","raytracer::material::dielectric","",7,[[["self"],["ray"],["hitrecord"],["vec3"],["ray"]],["bool"]]],[11,"scatter","raytracer::material::lambertian","",8,[[["self"],["ray"],["hitrecord"],["vec3"],["ray"]],["bool"]]],[11,"scatter","raytracer::material::metal","",9,[[["self"],["ray"],["hitrecord"],["vec3"],["ray"]],["bool"]]],[11,"eq","raytracer::vector","",12,[[["self"],["vec3"]],["bool"]]],[11,"ne","","",12,[[["self"],["vec3"]],["bool"]]],[11,"clone","raytracer::hitable::hitable_list","",3,[[["self"]],["hitable"]]],[11,"clone","","",2,[[["self"]],["hitablelist"]]],[11,"clone","raytracer::hitable::sphere","",4,[[["self"]],["sphere"]]],[11,"clone","raytracer::hitable","",1,[[["self"]],["hitrecord"]]],[11,"clone","raytracer::material::dielectric","",7,[[["self"]],["dielectric"]]],[11,"clone","raytracer::material::lambertian","",8,[[["self"]],["lambertian"]]],[11,"clone","raytracer::material::metal","",9,[[["self"]],["metal"]]],[11,"clone","raytracer::material","",6,[[["self"]],["material"]]],[11,"clone","raytracer::vector","",12,[[["self"]],["vec3"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"sub","","",12,[[["self"],["vec3"]],["vec3"]]],[11,"add","raytracer::hitable::hitable_list","",2,[[["self"],["hitablelist"]],["hitablelist"]]],[11,"add","raytracer::vector","",12,[[["self"],["vec3"]],["vec3"]]],[11,"mul","","",12,[[["self"],["f64"]],["vec3"]]],[11,"mul","","",12,[[["self"],["vec3"]],["vec3"]]],[11,"div","","",12,[[["self"],["f64"]],["vec3"]]],[11,"div","","",12,[[["self"],["vec3"]],["vec3"]]],[11,"neg","","",12,[[["self"]],["vec3"]]],[11,"add_assign","","",12,[[["self"],["vec3"]]]],[11,"sub_assign","","",12,[[["self"],["vec3"]]]],[11,"mul_assign","","",12,[[["self"],["f64"]]]],[11,"mul_assign","","",12,[[["self"],["vec3"]]]],[11,"div_assign","","",12,[[["self"],["f64"]]]],[11,"div_assign","","",12,[[["self"],["vec3"]]]],[11,"index","","",12,[[["self"],["usize"]],["f64"]]],[11,"index_mut","","",12,[[["self"],["usize"]],["f64"]]],[11,"sum","","",12,[[["i"]],["vec3"]]]],"paths":[[3,"Camera"],[3,"HitRecord"],[3,"HitableList"],[4,"HITABLE"],[3,"Sphere"],[8,"Hitable"],[4,"MATERIAL"],[3,"Dielectric"],[3,"Lambertian"],[3,"Metal"],[8,"Scatter"],[3,"Ray"],[3,"Vec3"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
