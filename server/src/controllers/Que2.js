module.exports = {

    que2(req, res) {

        x = parseInt(JSON.stringify(req.body['input1']))
        console.log('input1 = ' + x)

        y = parseInt(JSON.stringify(req.body['input2']))
        console.log('input2 = ' + y)

        const output = GCD(x, y)

        function GCD(a, b) {
            if (b === 0) {
              return a;
            }
            return GCD(b, a % b);
          }

        res.send(output.toString())

    }
}

