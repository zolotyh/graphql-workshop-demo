// Add this to the VERY top of the first file loaded in your app
const agent = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'test',

  // Use if APM Server requires a token
  secretToken:
    'xxVpmQB2HMzCL9PgBHVrnxjNXXw5J7bd79DFm6sjBJR5HPXDhcF8MSb3vv4bpg44',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
});

const Tracer = require('elastic-apm-node-opentracing');

// Pass the Elastic APM agent as an argument to the OpenTracing tracer
const tracer = new Tracer(agent);

const span = tracer.startSpan('my-first-span');

setTimeout(() => {
    const span1 = tracer.startSpan('my-second-span');
    setTimeout(() => {
        span1.finish()
        span.finish();
    }, 1000)
}, 1000);
