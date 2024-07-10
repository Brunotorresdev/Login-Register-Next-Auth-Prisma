"use client";
import { signOut, useSession } from "next-auth/react";

export default function AuthButton({ page }: { page: string }) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div className="flex items-center justify-center">
      {!isAuthenticated ? (
        <a
          href={page === "register" ? "/login" : "register"}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          {page === "register" ? "Entrar" : "Criar Conta"}
        </a> 
      ) : (
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="px-4 py-2 text-white bg-red-500 rounded"
        >
          Sair
        </button>
      )}
    </div>
    
  );
}

// Botão para navegar entre criar conta e fazer login (condicinalmente definido pela autenticação do usuario)
// e botão de sign out
