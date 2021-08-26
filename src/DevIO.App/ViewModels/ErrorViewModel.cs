namespace DevIO.App.ViewModels
{
    public class ErrorViewModel
    {
        
        public ErrorViewModel(int erroCode, string titulo, string mensagem)
        {
            ErroCode = erroCode;
            Titulo = titulo;
            Mensagem = mensagem;
        }

        public int ErroCode { get; set; }
        public string Titulo { get; set; }
        public string Mensagem { get; set; }
        public TipoStatusCode StatusCode { get; set; }

        public static ErrorViewModel MensagemErroServidor(int id)
        {
            if(id.Equals((int)TipoStatusCode.Servidor))
                return Erro(id, "Ocorreu um erro!",ErroMsgHttp.Erro500 );

            if (id.Equals((int)TipoStatusCode.NotFound))
                return Erro(id, "Ops! Página não encontrada", ErroMsgHttp.Erro404);

            if (id.Equals((int)TipoStatusCode.Unauthorized))
                return Erro(id, "Acesso Negado", ErroMsgHttp.Erro403);

            return null;
        }

        private static ErrorViewModel Erro(int id, string titulo, string msg)
        {
            var model = new ErrorViewModel(id, titulo, msg);
           
            return model;
        }
        
    }
}
