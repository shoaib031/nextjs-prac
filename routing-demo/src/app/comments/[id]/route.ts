import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}








// import cookie from 'cookie';

// export default function handler(req, res) {
//   res.setHeader('Set-Cookie', cookie.serialize('token', '12345', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== 'development',
//     maxAge: 60 * 60 * 24, // 1 day
//     sameSite: 'strict',
//     path: '/'
//   }));
//   res.status(200).json({ message: 'Cookie set!' });
// }


// import cookie from 'cookie';

// export default function handler(req, res) {
//   const cookies = cookie.parse(req.headers.cookie || '');
//   const token = cookies.token;
  
//   res.status(200).json({ token });
// }