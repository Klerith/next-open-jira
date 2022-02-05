// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean;
  message: string;
  method: string;
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {


  res.status(200).json({ 
    ok: true,
    message: 'Todo correcto',
    method: req.method || 'no hay método',
  });

}
