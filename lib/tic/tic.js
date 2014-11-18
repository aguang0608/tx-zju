/*
    Written by skygr, Nov 15, 2014.
    Last modified Nov 15, 2014.
    Tencent Innovation Club @ZJU.
    Email: sky_gr@qq.com
    Home Page: skygr.m.apecoderandsiegelion.com
    Simple, simple, this is life!
*/
(function() {
    window["TIC"] = new Object();
    /*
    window.TIC.BackgroundBall
      @Description: Create a moving-ball as background.
      @Parameters:
        * Speed: PI/ms
        * Radius:
        * Border: width of border
        * Count: the number of triangles.
  */
    window["TIC"]["BackgroundBox"] = function(SpeedAlpha, SpeedBelt, CameraDistance, Opacity, Color, ZIndex, Radius, Width, Count) {
        var Scene = new THREE.Scene();
        var Camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
        var Renderer = new THREE.WebGLRenderer();
        Renderer.setSize( window.innerWidth, window.innerHeight );
        $(document.body).append(Renderer.domElement);
        $(Renderer.domElement).css('z-index', ZIndex);
        $(Renderer.domElement).css('opacity', Opacity);
        var Geometry = new THREE.Geometry();
        for (var i = 0; i < Count; i++) {
            var ox = (Math.random() - 0.5) * Radius;
            var oy = (Math.random() - 0.5) * Radius;
            var oz = (Math.random() - 0.5) * Radius;
            var oradius = Math.random() * Width;
            var alpha1 = Math.random() * Math.PI * 2;
            var alpha2 = Math.random() * Math.PI * 2;
            var alpha3 = Math.random() * Math.PI * 2;
            var belt = Math.random() * Math.PI;
            var x1 = ox + oradius * Math.sin(belt) * Math.cos(alpha1);
            var y1 = oy + oradius * Math.sin(belt) * Math.sin(alpha1);
            var z1 = oz - oradius * Math.cos(belt);
            var x2 = ox + oradius * Math.sin(belt) * Math.cos(alpha2);
            var y2 = oy + oradius * Math.sin(belt) * Math.sin(alpha2);
            var z2 = oz - oradius * Math.cos(belt);
            var x3 = ox + oradius * Math.sin(belt) * Math.cos(alpha3);
            var y3 = oy + oradius * Math.sin(belt) * Math.sin(alpha3);
            var z3 = oz - oradius * Math.cos(belt);
            Geometry.vertices.push(new THREE.Vector3(x1, y1, z1));
            Geometry.vertices.push(new THREE.Vector3(x2, y2, z2));
            Geometry.vertices.push(new THREE.Vector3(x3, y3, z3));
            Geometry.faces.push(new THREE.Face3(i * 3, i * 3 + 1, i * 3 + 2));
            Geometry.faces.push(new THREE.Face3(i * 3, i * 3 + 2, i * 3 + 1));
        }
        Geometry.computeBoundingSphere();
        var Material = new THREE.MeshBasicMaterial({
            color: Color
        });
        var Cube = new THREE.Mesh(Geometry, Material);
        Scene.add(Cube);
        var camera_alpha = 0,
            camera_belt = 0;
        var loop = function() {
            requestAnimationFrame(loop);
            camera_alpha += SpeedAlpha;
            camera_belt += SpeedBelt;
            var cx = CameraDistance * Math.sin(camera_alpha) * Math.cos(camera_belt);
            var cy = CameraDistance * Math.sin(camera_alpha) * Math.sin(camera_belt);
            var cz = CameraDistance * Math.cos(camera_alpha);
            Camera.position.x = cx;
            Camera.position.y = cy;
            Camera.position.z = cz;
            Camera.lookAt(new THREE.Vector3(0, 0, 0));
            Renderer.render(Scene, Camera);
        };
        loop();
    };
    window["TIC"]["BackgroundBall"] = function(SpeedAlpha, SpeedBelt, CameraDistance, Opacity, Color, ZIndex, Radius, Width, Count) {
        var Scene = new THREE.Scene();
        var Camera = new THREE.PerspectiveCamera(75, $(window).width() / $(window).height(), 1, 1000);
        var Renderer = new THREE.WebGLRenderer();
        Renderer.setSize($(window).width(), $(window).height());
        $(document.body).append(Renderer.domElement);
        $(Renderer.domElement).css('z-index', ZIndex);
        $(Renderer.domElement).css('opacity', Opacity);
        var Geometry = new THREE.Geometry();
        for (var i = 0; i < Count; i++) {
            var A = Math.random() * Math.PI * 2;
            var B = Math.random() * Math.PI * 2;
            var ox = Radius * Math.sin(A) * Math.cos(B);
            var oy = Radius * Math.sin(A) * Math.sin(B);
            var oz = Radius * Math.cos(A);
            var oradius = Math.random() * Width;
            var alpha1 = Math.random() * Math.PI * 2;
            var alpha2 = Math.random() * Math.PI * 2;
            var alpha3 = Math.random() * Math.PI * 2;
            var belt = Math.random() * Math.PI;
            var x1 = ox + oradius * Math.sin(belt) * Math.cos(alpha1);
            var y1 = oy + oradius * Math.sin(belt) * Math.sin(alpha1);
            var z1 = oz - oradius * Math.cos(belt);
            var x2 = ox + oradius * Math.sin(belt) * Math.cos(alpha2);
            var y2 = oy + oradius * Math.sin(belt) * Math.sin(alpha2);
            var z2 = oz - oradius * Math.cos(belt);
            var x3 = ox + oradius * Math.sin(belt) * Math.cos(alpha3);
            var y3 = oy + oradius * Math.sin(belt) * Math.sin(alpha3);
            var z3 = oz - oradius * Math.cos(belt);
            Geometry.vertices.push(new THREE.Vector3(x1, y1, z1));
            Geometry.vertices.push(new THREE.Vector3(x2, y2, z2));
            Geometry.vertices.push(new THREE.Vector3(x3, y3, z3));
            Geometry.faces.push(new THREE.Face3(i * 3, i * 3 + 1, i * 3 + 2));
            Geometry.faces.push(new THREE.Face3(i * 3, i * 3 + 2, i * 3 + 1));
        }
        Geometry.computeBoundingSphere();
        var Material = new THREE.MeshBasicMaterial({
            color: Color
        });
        var Cube = new THREE.Mesh(Geometry, Material);
        Scene.add(Cube);
        var camera_alpha = 0,
            camera_belt = 0;
        var loop = function() {
            requestAnimationFrame(loop);
            camera_alpha += SpeedAlpha;
            camera_belt += SpeedBelt;
            var cx = CameraDistance * Math.sin(camera_alpha) * Math.cos(camera_belt);
            var cy = CameraDistance * Math.sin(camera_alpha) * Math.sin(camera_belt);
            var cz = CameraDistance * Math.cos(camera_alpha);
            Camera.position.x = cx;
            Camera.position.y = cy;
            Camera.position.z = cz;
            Camera.lookAt(new THREE.Vector3(0, 0, 0));
            Renderer.render(Scene, Camera);
        };
        loop();
    };
    //sth more..
})();

(function() {
    var setBackground = function() {
        window.TIC.BackgroundBox(-0.002, 0.001, 6, 1, 0xee1289, -2, 8, 0.35, 512);
        window.TIC.BackgroundBox(0.001, -0.0012, 8, 0.5, 0xDB7093, -1, 10, 0.25, 512);
    };
    var refresh = function() {
        location.href = location.href;
    }
    $(document).ready(setBackground);
    $(window).resize(refresh);
})();