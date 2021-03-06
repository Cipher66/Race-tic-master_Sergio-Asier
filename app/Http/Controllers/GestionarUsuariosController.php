<?php
namespace App\Http\Controllers;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Http\Request;
    use App\UserFormRequest;
    use App\User;

class GestionarUsuariosController extends Controller
{
//<!--href="adminEliminarUsuario/{{ $data -> id }}"-->
    public function ver()
    {
        $usuarios = DB::table('users')->get();
        return view('admin.admin', ['usuarios' => $usuarios]);
    }
    public function eliminar($id)
    {
        DB::table('users')->where('id', '=' , $id)->delete();
        return redirect('/admin/verUsuarios');
    }
    public function editar($id)
    {
        $data = User::find($id);
        return view('admin.editarUsuarios', compact('data'));
    }
    public function update(Request $request, $id)
    {
        $data = User::find($id);
        $data->name = $request->input('name');
        $data->email = $request->input('email');
        $data->update();
        return \redirect('/admin/verUsuarios');
    }

        /**/

}