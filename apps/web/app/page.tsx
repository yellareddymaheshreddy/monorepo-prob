import {client} from "@repo/db/client"
export default async function Home() {
  const resp=await client.user.create({
    data: {
        name: "test",
        email: "sdfsa"
    }})
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Details from db are logged in server</h1>
      <p className="text-xl">Welcome to the Next.js app!</p>
      {JSON.stringify(resp)}
    </main>
  );
}